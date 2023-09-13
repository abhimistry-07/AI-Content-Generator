# AI Content Generator

## Project Overview

Welcome to the README for the Generative AI project! This project is designed to explore the capabilities of generative artificial intelligence and create various types of content, according to user input using AI models.

## Task

To use this generative AI project, follow these steps:

1. **Understanding the ChatGPT model:**
2. **API Key Acquisition:**
3. **Backend Setup:**
4. **Connecting with OpenAI API:**
5. **Conversational Interface:**

## Table of Contents

1. [Project Overview](#project-overview)
2. [Task](#task)
3. [Getting Started](#getting-started)

- [Prerequisites](#prerequisites)
- [Tech Stack Used](#tech-stack-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)

4. [API Reference](#api-reference)

## Getting Started

### Tech Stack Used

**Client:** HTML, CSS, JavaScript(React)

**Server:** NodeJs, Express, Open-ai

### Prerequisites

Before you can start using this project, make sure you have the following prerequisites installed:

- Node openai axios cors dotenv express
- Dependencies present in `package.json`

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/abhimistry-07/AI-Content-Generator.git
   ```

2. Change to the project directory:

   ```bash
   cd content-generation-web-application
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the server

   ```bash
   node index.js
   ```

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`OPEN_AI_KEY`

## API Reference

#### Get

```http
  GET /search?thing=${thing}&keyword=${keyword}
```

## Demo

```
https://content-generation-web-application.vercel.app/
```

## Images

![Alt text](/Image1.jpg)