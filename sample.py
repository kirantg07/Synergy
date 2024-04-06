# Function to extract features from user description
def extract_features(description):
    features = []
    # Split the description into words and find nouns
    for word in description.split():
        if word.lower() in ['menu', 'homepage', 'footwear', 'electronics', 'dresses', 'ornaments']:
            features.append(word.capitalize())
    return features

# Function to generate technology recommendations
def generate_recommendations(features):
    technologies = ['Reactjs', 'Nodejs', 'NLP', 'HTML', 'CSS']
    sample_code = "Sample code snippets:\n"
    for feature in features:
        sample_code += f"# Code for {feature}\n"
        # Generate sample code based on feature
        # This is a simplified version, actual code generation could be more complex
        sample_code += f"def {feature.lower()}_page():\n"
        sample_code += f"    # Your code here\n\n"
    return technologies, sample_code

# Main function
def main():
    description = input("Please describe the app you want to create: ")
    features = extract_features(description)
    if features:
        print("For creating your app, you need the following features:")
        for index, feature in enumerate(features, start=1):
            print(f"{index}. {feature}")
        technologies, sample_code = generate_recommendations(features)
        print("\nTechnologies:")
        for tech in technologies:
            print(tech)
        print("\nSample Code:")
        print(sample_code)
    else:
        print("No features extracted from the description.")

if __name__ == "__main__":
    main()
