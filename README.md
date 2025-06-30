# 💸 Banking & Finance Manager

An all-in-one modern finance management app built with **Next.js**, **Plaid**, **Appwrite**, **Chart.js**, **Tailwind CSS**, and **Sentry** — giving users full control over their personal finances with real-time insights, bank integration, and budget tracking.

---

## 📱 Live Preview

🚀 [Click here to launch the app](#)  
🛠️ *(Link your deployment when ready)*

---

## 📦 Tech Stack

| Tech           | Role                                         |
|----------------|----------------------------------------------|
| **Next.js**    | App framework & routing                      |
| **Plaid**      | Secure bank account integration              |
| **Appwrite**   | Backend-as-a-Service (Auth, DB, Storage)     |
| **Chart.js**   | Data visualization & financial analytics     |
| **Tailwind CSS** | Responsive UI styling                      |
| **Sentry**     | Error tracking & monitoring                  |

---

## 🧠 Features

- ✅ Link real bank accounts via **Plaid**
- ✅ Visual dashboards with **Chart.js**
- ✅ Secure authentication & data storage with **Appwrite**
- ✅ Real-time expense/income tracking
- ✅ Custom categories & budgeting
- ✅ Light/dark mode UI with **Tailwind CSS**
- ✅ Error reporting via **Sentry**

---

## ⚙️ Setup & Installation

```bash
git clone https://github.com/yourusername/finance-manager.git
cd finance-manager

# Install dependencies
npm install

# Add your env variables
cp .env.example .env.local

Edit your .env.local:

NEXT_PUBLIC_APPWRITE_ENDPOINT=...
NEXT_PUBLIC_APPWRITE_PROJECT=...
NEXT_PUBLIC_PLAID_CLIENT_ID=...
NEXT_PUBLIC_PLAID_SECRET=...
NEXT_PUBLIC_SENTRY_DSN=...

Then:

npm run dev

🌐 Go to: http://localhost:3000
📊 Dashboard Preview

    Sample financial chart using Chart.js:

🔐 Security First

    OAuth-based authentication via Appwrite

    Secure Plaid link tokens

    Errors tracked & monitored with Sentry

    Sanity-checked inputs and backend validation

📁 Folder Structure

src/
│
├── app/             # Next.js app directory
├── components/      # Reusable components
├── lib/             # Plaid, Appwrite, Sentry configs
├── constants/       # App-wide constants
├── styles/          # Tailwind + custom CSS
├── utils/           # Helper functions
└── assets/          # Images & icons

🧑‍💻 Developer Notes

    Built with ❤️ by Natan Muleta

    Contributions and suggestions are welcome!

    Open to feedback — feel free to open an issue.

🛡 License

MIT License © 2025 Natan Muleta


---

## 🔥 Optional Ideas to Make It More Interactive:

- Add **GitHub Badges** for build status, license, etc.
- Embed a Loom or GIF video of the app in action
- Add a **Roadmap** section using checkboxes
- Include mock login credentials for demo (e.g., test@test.com / test123)

---

Let me know if you'd like help customizing it further — for example, if you're using **Git
