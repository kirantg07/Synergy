from flask import Flask, render_template, request

app = Flask(__name__)


FEATURES_MAPPING = {
    'task management': ['Schedule a task', 'Mark as done', 'Set priority', 'Reminder notifications'],
    'shopping': ['User login', 'Product catalog', 'Add to cart', 'Checkout process', 'Delivery address', 'Payment options'],
    'chatting': ['Real-time messaging', 'Group chats', 'Multimedia sharing', 'Emoji and stickers', 'Online status'],
    'food delivery': ['Restaurant search', 'Menu browsing', 'Order placement', 'Delivery tracking', 'Payment integration'],
    'transportation': ['Route planning', 'Real-time location tracking', 'Fare estimation', 'Booking management']
}

def get_features(app_category):
    
    return FEATURES_MAPPING.get(app_category.lower(), [])

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        user_input = request.form['user_input']
        app_category = classify_app_category(user_input)
        features = get_features(app_category)
        return render_template('result.html', user_input=user_input, app_category=app_category, features=features)
    return render_template('index.html')

def classify_app_category(user_input):
    
    if any(keyword in user_input.lower() for keyword in ['task management', 'task manager']):
        return 'task management'
    elif any(keyword in user_input.lower() for keyword in ['shopping', 'online shopping', 'e-commerce']):
        return 'shopping'
    elif any(keyword in user_input.lower() for keyword in ['chat', 'messaging']):
        return 'chatting'
    elif any(keyword in user_input.lower() for keyword in ['food delivery', 'restaurant', 'order food']):
        return 'food delivery'
    elif any(keyword in user_input.lower() for keyword in ['transport', 'ride sharing', 'cab']):
        return 'transportation'
    else:
        return 'general'  

if __name__ == '__main__':
    app.run(debug=True)
