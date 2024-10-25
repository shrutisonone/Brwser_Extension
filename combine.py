import os

def concatenate_files(input_files, output_file):
  with open(output_file, 'w') as output:
    for input_file in input_files:
      with open(input_file, 'r') as input_file_obj:
        output.write(input_file_obj.read())

input_files = ['manifest.json', 'index.js', 'popup.html', 'popup.js']
output_file = 'combined.js'

concatenate_files(input_files, output_file)