# BYOB

## How to Run the Project

### Prerequisites

1. Node.js installed on your system.
2. npm (Node Package Manager) installed on your system.
### Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory.

```bash
cd /c:/Users/disha/OneDrive/Desktop/mm/FinAssist
```

Install the required dependencies using npm.

```bash
npm install
```

### Configuration

1. Create a `config.ini` file in the project directory with the following content:

```ini
[API_KEYS]
GOOGLE_GEMINI_API_KEY=your_google_gemini_api_key_here
```

Replace `your_google_gemini_api_key_here` with your actual Google Gemini API key.

### Running the Application

1. Start the development server.


```bash
npm run dev
```

2. Open your web browser and go to http://localhost:3000/ to access the application.

### Additional Notes

- Ensure you have a stable internet connection as the application fetches real-time stock data.
- If you encounter any issues, check the console for error messages and ensure all dependencies are installed correctly.
