import time
import requests
from pynput import mouse, keyboard

class ActivityTracker:
    def __init__(self):
        self.left_clicks = 0
        self.right_clicks = 0
        self.middle_clicks = 0
        self.keypresses = 0
        self.mouse_movement = 0
        self.last_x, self.last_y = (0, 0)

    def on_click(self, x, y, button, pressed):
        if pressed:
            if button == mouse.Button.left:
                self.left_clicks += 1
            elif button == mouse.Button.right:
                self.right_clicks += 1
            elif button == mouse.Button.middle:
                self.middle_clicks += 1

    def on_move(self, x, y):
        if self.last_x == 0 and self.last_y == 0:
            self.last_x, self.last_y = x, y
            return
        distance = ((x - self.last_x) ** 2 + (y - self.last_y) ** 2) ** 0.5
        self.mouse_movement += distance / 96  # Convert pixels to inches (assuming 96 DPI)
        self.last_x, self.last_y = x, y

    def on_press(self, key):
        self.keypresses += 1

    def track_activity(self):
        mouse_listener = mouse.Listener(on_click=self.on_click, on_move=self.on_move)
        keyboard_listener = keyboard.Listener(on_press=self.on_press)

        mouse_listener.start()
        keyboard_listener.start()

        try:
            while True:
                self.send_data_to_server()
                time.sleep(10)  # Wait for 10 seconds before next update
        except KeyboardInterrupt:
            mouse_listener.stop()
            keyboard_listener.stop()

    def send_data_to_server(self):
        data = {
            'left_clicks': self.left_clicks,
            'right_clicks': self.right_clicks,
            'middle_clicks': self.middle_clicks,
            'keypresses': self.keypresses,
            'mouse_movement': round(self.mouse_movement, 2)
        }
        try:
            response = requests.post('http://localhost:8000/update_activity', json=data)
            if response.status_code == 200:
                print("Data sent successfully")
            else:
                print(f"Failed to send data: {response.status_code}")
        except requests.RequestException as e:
            print(f"Error sending data: {e}")

if __name__ == "__main__":
    tracker = ActivityTracker()
    tracker.track_activity()