//Question 1: useEffect Bug
useEffect(() => {
  fetch(`/api/users/${userId}`)
    .then((res) => res.json())
    .then((data) => setUser(data));
}, []);
//Problem
// userId is NOT in dependency array
// Why it’s a bug
// Effect runs only once on mount
// If userId changes, API will NOT re-run
// Leads to stale / incorrect user data
// Fix
useEffect(() => {
  fetch(`/api/users/${userId}`)
    .then((res) => res.json())
    .then((data) => setUser(data));
}, [userId]);
// Impact
// Prevents incorrect user data being displayed
// Ensures UI stays in sync with state changes



// Question 2: State Update Issue
setCount(count + 1);
setCount(count + 1);
// Problem
// React batches state updates
// count value is same in both lines
// Second update overwrites first
// Result

// If count = 0 → final value = 1 (not 2)

// Fix

// Use functional update:

setCount(prev => prev + 1);
setCount(prev => prev + 1);
// Impact
// Ensures correct incremental updates
// Prevents UI inconsistency




// Question 3: Node.js API Bug
app.get("/user/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});
// Problems
// No error handling
// No check if user exists
// DB failure not handled
// Risks
// API may crash
// Returns null silently
// Poor UX / unreliable system
// Fix
app.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
// Impact
// Improves reliability
// Handles failures safely
// Better user experience




// Question 4: React Performance Bug
{items.map(item => (
  <div key={Math.random()}>{item}</div>
))}
// Problem
// Using Math.random() as key
// Why this is bad
// Keys change on every render
// React cannot track elements properly
// Causes unnecessary re-renders
// Fix

// Use stable ID or index:

{items.map((item, index) => (
  <div key={index}>{item}</div>
))}

// (Better if real ID exists)

// Impact
// Improves rendering performance
// Prevents UI flickering
// Ensures stable component identity



// Question 5: SQL Bug (Security)
SELECT * FROM users
WHERE email = 'test@example.com'
OR '1'='1';
// Problem
// Classic SQL Injection vulnerability
// Why it's dangerous
// '1'='1' always true
// Attacker can bypass authentication
// Can expose entire database
// Fix

// Use parameterized queries:

SELECT * FROM users WHERE email = ?

OR (Node example):

db.query("SELECT * FROM users WHERE email = ?", [email]);
// Impact
// Prevents data breach
// Protects sensitive patient/user data
//“This improves reliability, security, and user safety”