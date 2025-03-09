import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [userData, setUserData] = useState(null);
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [selectedTable, setSelectedTable] = useState("users");
  const [error, setError] = useState(null); // To handle errors
  const [loading, setLoading] = useState(true); // Loading state
    
  const content = {
    tab1: [<button 
            className={selectedTable === "users" ? "active-tab" : ""}
            onClick={() => setSelectedTable("users")}
            >Users
          </button>,
          
          <button 
            className={selectedTable === "posts" ? "active-tab" : ""}
            onClick={() => setSelectedTable("posts")}
            >Posts
          </button>,
          
          <button 
            className={selectedTable === "follows" ? "active-tab" : ""}
            onClick={() => setSelectedTable("follows")}
            >Follows
          </button>
          ],
    tab2: {
      users: [
            "Username1",
            "Username2",
            "Username3"],

      posts: [
            "Username1 - Post content",
            "Username2 - Post content",
            "Username2 - Post content"],
      
      follows: [
            "Username1 follows username2",
            "Username2 follows username 3",
            "Username3 follows username1"],
    }
  };

  
  

  return (
    <div>
      <h1>Tab Example</h1>
      
      {/* Tabs */}
      <div>
        <button
          className={selectedTab === "tab1" ? "active-tab" : ""}
          onClick={() => setSelectedTab("tab1")}
          >Tab 1
        </button>

        <button 
          className={selectedTab === "tab2" ? "active-tab" : ""}
          onClick={() => setSelectedTab("tab2")}
          >Tab 2
          </button>
      </div>

      {/* Content */}
      {selectedTab === "tab1" && (
        <div>
          {content.tab1.map((tabButton, index) => (
            <React.Fragment key={index}>{tabButton}</React.Fragment>
          ))}
        </div>
      )}

      {selectedTab === "tab2" && (
        <div>
          <h2>Display Stuff</h2>
          <ul>
            {content.tab2[selectedTable].map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </div>
      )}
    </div>
  );
}

export default App

