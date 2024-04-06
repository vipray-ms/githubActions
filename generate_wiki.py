#Note: The openai-python library support for Azure OpenAI is in preview.
      #Note: This code sample requires OpenAI Python library version 1.0.0 or higher.
import os
import json
from openai import AzureOpenAI

def convert_json_to_string(json_file):
    # Load JSON data
    with open(json_file, 'r') as file:
        data = json.load(file)

    # Analyze the data and generate the wiki content
    # This is a placeholder as the actual processing would depend on the structure of your JSON data
    wiki_content = str(data)  

    return wiki_content


def main():
    # Generate wiki content from JSON data
    wiki_content = convert_json_to_string('api_contract.json')

    client = AzureOpenAI(
        azure_endpoint = os.environ.get('API_ENDPOINT'), 
        api_key=os.environ.get('API_KEY'),  
        api_version="2024-02-15-preview"
    )

    message_text = [
        {"role":"system",
        "content":"You are an AI assistant that translate JSON formatted API Contract into Descriptive document that explains each and every API in detail format. You return a .md file with all explanation."
        },
        {"role":"user",
        "content":"## API Contract Details:\n\n"+wiki_content+"{Iterate through each endpoint in the API contract and provide details for each endpoint}\n\n### Endpoints:\n{List each endpoint with its path, methods, description, parameters, responses, etc.}\n\n{Provide additional details for each endpoint, such as examples, usage instructions, etc.}\n\n## Definitions:\n{List any definitions or data models used in the API contract with their properties and descriptions}\n\n## Descriptive Wiki:\n\n{Use the information provided above to generate descriptive content for each endpoint and definition}"
        }
    ]
        
    completion = client.chat.completions.create(
    model="gpt-35-turbo-vip", # model = "deployment_name"
    messages = message_text,
    temperature=0.7,
    max_tokens=800,
    top_p=0.95,
    frequency_penalty=0,
    presence_penalty=0,
    stop=None
    )

    #print(completion.choices[0].message.content)
    # Open the file in write mode
    with open('descriptive_wiki.md', 'w') as f:
        # Write the variable's value to the file
        f.write(completion.choices[0].message.content)

if __name__ == '__main__':
    main()
