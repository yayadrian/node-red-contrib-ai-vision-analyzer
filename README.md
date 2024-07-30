[![platform](https://img.shields.io/badge/platform-Node--RED-red)](https://nodered.org)
[![npm](https://img.shields.io/npm/v/node-red-contrib-simple-gpt-vision.svg)](https://www.npmjs.com/package/node-red-contrib-simple-gpt-vision)
[![downloads](https://img.shields.io/npm/dt/node-red-contrib-simple-gpt-vision.svg)](https://www.npmjs.com/package/node-red-contrib-simple-gpt-vision)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/HaroldPetersInskipp/node-red-contrib-chatgpt/blob/main/LICENSE)

## Overview
OpenAI GPT-4 Vision API - This is a node that performs image analysis.  
Enter the image you want to analyze in the payload and it will analyze the image according to the prompts.

Example: Can you tell me what is in this image?

## Install

```
npm i node-red-contrib-gpt4-vision
```

or

Install from the Admin tab

## How to use
### Input items

|Item          |Description                             |
|--------------|----------------------------------------|
|payload       |Specify the image URL or base64 format. |
|OpenAI API Key|Set the OpenAPI API key.                |
|prompt        |Prompt to analyze                       |

### Output items

|Item   |Description                                                       |
|-------|------------------------------------------------------------------|
|payload|The image analysis results according to the prompts are returned. |


## LINK

* [NodeRED](https://flows.nodered.org/node/node-red-contrib-simple-gpt-vision)
* [Libraries.io](https://libraries.io/npm/node-red-contrib-simple-gpt-vision)
* [npm](https://www.npmjs.com/package/node-red-contrib-simple-gpt-vision)

## release

* 2023/12/13: 初回リリース（v1.0.0）- original version https://github.com/gaomar/node-red-contrib-simple-gpt-vision. Thanks to gaomar
* 2024/07/30: Forked version to fix error gpt4-preview not available. Now using gtp-4o

