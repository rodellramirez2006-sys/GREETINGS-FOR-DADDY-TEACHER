  # 💙 Teacher's Day Interactive Letter

## 📖 Project Description

This project is an interactive **Teacher's Day digital letter** created especially for **Sir Randy Bello**.

The website uses a **Doraemon-inspired blue, yellow, and red theme** combined with smooth animations and interactive elements to create a fun and memorable digital greeting.

The main feature is an animated envelope that opens to reveal a personalized Teacher's Day letter. The website also includes a teacher photo, appreciation message, smooth navigation, and interactive effects.

---

## 🎯 Project Purpose

The purpose of this project is to create a creative and meaningful digital Teacher's Day greeting that shows appreciation, gratitude, and respect for a teacher.

It demonstrates the use of:

* HTML for the website structure
* CSS for styling and animations
* JavaScript for interactivity
* Responsive web design
* Smooth scrolling
* Interactive UI elements

---

## ✨ Features

### 💙 Doraemon-Inspired Theme

The website uses a blue, yellow, and red color palette inspired by the visual style of Doraemon.

### 💌 Interactive Envelope

The Teacher's Day message is initially hidden inside an envelope.

Clicking **"Open Letter"** triggers a smooth opening animation.

### 📜 Animated Letter

After the envelope opens, the personalized letter smoothly appears on the screen.

### 👨‍🏫 Teacher Photo

The letter includes a photo of **Sir Randy Bello**.

### ⭐ Appreciation Button

The **"Send Appreciation"** button displays an additional thank-you message and includes a small animation effect.

### 🧭 Smooth Navigation

The navigation links smoothly scroll to:

* Home
* Letter
* Message

### ✨ Floating Decorations

The page includes floating stars and other decorative elements that move based on the user's mouse position.

### 📱 Responsive Design

The website adjusts its layout for smaller screens such as smartphones and tablets.

### ♿ Reduced Motion Support

The CSS includes support for users who prefer reduced motion.

---

## 📁 Project Files

```text
teachers-day-project/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── 353447894_3435874076671268_4462876624252987564_n.jpg
```

### `index.html`

Contains the main structure and content of the Teacher's Day website, including:

* Navigation bar
* Hero section
* Doraemon-inspired face
* Interactive envelope
* Teacher's Day letter
* Teacher photo
* Appreciation section
* Footer

The page loads the external CSS and JavaScript files.

### `style.css`

Contains the visual design of the website, including:

* Colors
* Layout
* Typography
* Buttons
* Envelope design
* Animations
* Responsive styles
* Doraemon-inspired visual elements

The main color palette includes blue, yellow, red, and white.

### `script.js`

Controls the website's interactive functionality, including:

* Smooth scrolling
* Envelope opening
* Letter reveal
* Appreciation message
* Button animation
* Mouse-based floating decorations

The envelope animation adds an `opening` class and then reveals the letter after a short delay.

### `README.md`

Provides information about the project, its features, files, and instructions for running and customizing it.

### `353447894_3435874076671268_4462876624252987564_n.jpg`

This is the teacher's photo used inside the letter. The HTML references this image as the source for Sir Randy Bello's photo.

LIVE VIEW HERE: https://rodellramirez2006-sys.github.io/GREETINGS-FOR-DADDY-TEACHER/

## 🚀 How to Run the Project

### Method 1: Open Directly

1. Download or copy all project files into one folder.
2. Make sure the HTML, CSS, JavaScript, and image files are together.
3. Double-click `index.html`.
4. The website will open in your browser.

### Method 2: Using Visual Studio Code

1. Open **Visual Studio Code**.
2. Open the project folder.
3. Make sure these files are present:

```text
index.html
style.css
script.js
README.md
teacher-photo.jpg
```

4. Open `index.html`.
5. Right-click the file.
6. Select **Open with Live Server** if the Live Server extension is installed.

---

## 🖱️ How to Use

### Home

The homepage introduces the Teacher's Day project and displays:

> Happy Teacher's Day!

along with:

> Sir RANDY BELLO

Click:

**💌 Open My Letter**

to automatically scroll to the letter section.

### Letter

Click:

**✉️ Open Letter**

to open the animated envelope.

The letter will then appear automatically.

### Message

Scroll down to the appreciation section and click:

**💙 Send Appreciation**

A thank-you message will appear.

---

## ✏️ How to Customize

### Change the Teacher's Name

Open `index.html` and search for:

```html
RANDY BELLO
```

Replace it with another teacher's name if needed.

### Change the Teacher's Photo

The image is currently referenced in the HTML like this:

```html
<img src="353447894_3435874076671268_4462876624252987564_n.jpg"
     alt="Sir Randy Bello">
```

To use another photo:

1. Place the new image inside the project folder.
2. Change the filename in the `src` attribute.

Example:

```html
<img src="teacher.jpg" alt="Teacher">
```

### Change the Letter

The main message can be edited inside the `.letter-body` section of `index.html`.

You can personalize:

* Greeting
* Thank-you message
* Teacher's name
* Student's message
* Closing statement

### Change the Colors

The main colors are defined near the beginning of `style.css`:

```css
:root {
    --blue: #159bd3;
    --dark-blue: #075b89;
    --light-blue: #bceeff;
    --yellow: #ffd83d;
    --red: #e53935;
    --white: #fffdf5;
}
```

You can change these values to create a different theme.

---

## 💻 Technologies Used

| Technology     | Purpose                    |
| -------------- | -------------------------- |
| HTML5          | Website structure          |
| CSS3           | Design, layout, animations |
| JavaScript     | Interactivity and effects  |
| Responsive CSS | Mobile compatibility       |

---

## 🎨 Design Concept

The design combines a **Teacher's Day greeting** with a playful **Doraemon-inspired visual style**.

The website uses:

* 💙 Blue backgrounds and elements
* 💛 Yellow decorative elements
* ❤️ Red accent colors
* ⭐ Floating decorations
* 💌 Envelope animation
* 📜 Letter reveal animation
* 🔔 Teacher-themed decoration

The Doraemon-inspired face is created using CSS shapes rather than requiring an external character image.

---

## ⚙️ JavaScript Functionality

The project uses JavaScript to create smooth interactions.

### Smooth Scrolling

The **Open My Letter** button smoothly scrolls to the letter section.

### Envelope Animation

Clicking **Open Letter** activates the envelope animation and reveals the letter.

### Appreciation Interaction

Clicking **Send Appreciation** displays a thank-you message and animates the button.

### Mouse Parallax Effect

The floating decorations respond to mouse movement to create a subtle interactive effect.

---

## 📱 Responsive Design

The website includes a mobile layout for screens smaller than 650px.

The layout automatically adjusts:

* Navigation
* Teacher photo
* Letter size
* Envelope size
* Text size
* Spacing

This allows the website to work on both desktop and mobile devices.

---

## 👨‍🏫 Teacher

**Sir Randy Bello**

This project was created as a digital expression of appreciation for his guidance, patience, knowledge, and dedication as a teacher.

---

## 💙 Message

> Thank you for sharing your time, knowledge, patience, and effort with us.

**Happy Teacher's Day, Sir Randy Bello!** 💙

---

## 📄 License

This project was created as a personal/school project for Teacher's Day.

You are free to modify the code for educational and personal purposes.

---

## 👨‍💻 Author

**Rodel Ramirez**

Teacher's Day Interactive Letter
Made with 💙, HTML, CSS, and JavaScript.

---

# 🌟 Happy Teacher's Day!

**Thank you, Sir Randy Bello, for being part of our journey and helping us become better learners. 💙**
