# **Web3Journey.fun** 🚀  
*A minimal, hacker-style blog documenting my journey into Web3 security.*

---

## **📌 Overview**  
Web3Journey.fun is a **personal blog & learning hub** where I share insights on **Web3 security, smart contract vulnerabilities, and exploits**.  
Built with **React.js** and **GraphQL (Hashnode API)**, this site automatically fetches my latest blog posts.

---

## **🛠 Tech Stack**
- **Frontend:** React.js ⚛️  
- **API:** Hashnode GraphQL API  
- **Proxy Server:** Node.js (for bypassing CORS restrictions)  

---

## **📌 Features**
✅ **Monospace Typewriter Font** – Feels like a **hacker terminal**  
✅ **Auto-Fetch Blog Posts** – Dynamically fetches the latest article from my Hashnode blog  
✅ **Minimalist UI** – Clean black & white aesthetic for max readability  
✅ **Error Handling** – Displays helpful errors if the API fails  
✅ **CORS Proxy** – Fetches API data through a Node.js proxy  

---

## **🚀 How to Run Locally**
### **1️⃣ Clone the Repo**
```sh
git clone https://github.com/caffeinated1/web3journey.git
cd web3journey
```

---
Install Dependencies:

```sh
npm install
node proxyServer.js
=> localhost:5000
npm start
=> localhost:3000

```
API Setup 

```sh
Remember you post your hasnode (replace username)
query {
  user(username: "web3journey") {
    publications(first: 1) {
      edges {
        node {
          posts(first: 1) {
            edges {
              node {
                title
                slug
                url
              }
            }
          }
        }
      }
    }
  }
}







