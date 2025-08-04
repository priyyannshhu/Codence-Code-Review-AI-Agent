# Codence - AI Code Review Agent

## 🔗 Links

- **Live Demo**: [https://codence-ai.vercel.app/](https://codence-ai.vercel.app/) *(UI preview only)*
- **Repository**: [https://github.com/priyyannshhu/Codence-Code-Review-AI-Agent](https://github.com/priyyannshhu/Codence-Code-Review-AI-Agent)


> ⚠️ **Important Note**: This is a local machine-based AI Code Reviewer.
> 
> While it's deployed on Vercel for preview, **the live link is for UI demonstration only**. The application won't work as expected in the browser alone since it requires local setup and API credentials.
> 
> **To use this tool properly:**
> 1. Clone the repository
> 2. Set up your local environment (Node.js, Convex, `.env` with your `GEMINI_API_KEY`)
> 3. Run it locally using `npm run dev` or `pnpm dev`
> 
> The Gemini API runs server-side and relies on your local credentials. **This is not a SaaS application.**

A modern, intelligent code review application powered by Google's Gemini AI. Codence provides automated code analysis, suggestions for improvements, and helps maintain code quality standards through AI-powered insights.

## 🚀 Features

- **AI-Powered Code Analysis**: Leverages Google Gemini API for intelligent code review and suggestions
- **Real-time Collaboration**: Built with Convex for seamless real-time data synchronization
- **Modern UI/UX**: Clean, responsive interface built with Next.js 15 and Tailwind CSS
- **Syntax Highlighting**: Enhanced code readability with React Syntax Highlighter
- **Type-Safe Development**: Full TypeScript support with Zod validation
- **Code Quality Assessment**: Automated detection of potential issues, bugs, and improvements
- **Multiple Language Support**: Reviews code in various programming languages
- **Performance Optimization**: Suggests performance improvements and best practices
- **Security Analysis**: Identifies potential security vulnerabilities
- **Documentation Suggestions**: Recommends improvements for code documentation

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Convex (Real-time database and backend)
- **AI Integration**: Google Gemini API
- **UI Components**: Radix UI primitives
- **Code Highlighting**: React Syntax Highlighter
- **Type Safety**: TypeScript, Zod validation
- **Styling**: Tailwind CSS with custom components
- **Development**: Turbopack for fast builds

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** (latest LTS version recommended)
- **npm** or **pnpm**
- **Convex account** and CLI setup
- **Google Gemini API key** (required for AI functionality)

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/priyyannshhu/Codence-Code-Review-AI-Agent.git
cd Codence-Code-Review-AI-Agent
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
CONVEX_DEPLOY_KEY=your_convex_deploy_key
```

**Getting your Gemini API Key:**
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy and paste it into your `.env.local` file

### 4. Set Up Convex

```bash
# Install Convex CLI globally (if not already installed)
npm install -g convex

# Initialize and deploy Convex
npx convex dev
```

### 5. Start the Development Server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to access the application.



## 🎯 How to Use

1. **Upload Code**: Paste or upload your code files for review
2. **AI Analysis**: The Gemini AI will analyze your code for:
   - Potential bugs and errors
   - Performance optimization opportunities
   - Security vulnerabilities
   - Code style and best practices
   - Documentation improvements
3. **Review Results**: Get detailed feedback and suggestions
4. **Apply Changes**: Implement the suggested improvements



## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Priyanshu Vishwakarma**
- GitHub: [@priyyannshhu](https://github.com/priyyannshhu)
- Project Repository: [Codence-Code-Review-AI-Agent](https://github.com/priyyannshhu/Codence-Code-Review-AI-Agent)

## ⚠️ Troubleshooting

### Common Issues

**API Key Issues:**
- Ensure your `GEMINI_API_KEY` is correctly set in `.env.local`
- Verify the API key has the necessary permissions

**Convex Setup:**
- Make sure you're logged into Convex CLI: `npx convex auth`
- Check that your Convex deployment is active

**Local Development:**
- Clear Next.js cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

## 📞 Support

If you encounter any issues or have questions:

1. Check the [GitHub Issues](https://github.com/priyyannshhu/Codence-Code-Review-AI-Agent/issues)
2. Create a new issue with detailed information about your problem
3. Provide relevant error messages and steps to reproduce

---

⭐ **If you find this project helpful, please consider giving it a star on GitHub!**
