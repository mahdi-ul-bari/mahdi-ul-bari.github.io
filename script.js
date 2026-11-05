// JavaScript Code for Interactive Portfolio - Mahdi Ul Bari

// 1. Theme Toggle Logic (Light / Dark Theme)
function initTheme() {
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');

    // Default to light mode or local storage setting
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        if (darkIcon && lightIcon) {
            darkIcon.classList.remove('hidden');
            lightIcon.classList.add('hidden');
        }
    } else {
        document.documentElement.classList.remove('dark');
        if (darkIcon && lightIcon) {
            lightIcon.classList.remove('hidden');
            darkIcon.classList.add('hidden');
        }
    }
}

function toggleTheme() {
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');

    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        if (darkIcon && lightIcon) {
            lightIcon.classList.remove('hidden');
            darkIcon.classList.add('hidden');
        }
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        if (darkIcon && lightIcon) {
            darkIcon.classList.add('hidden');
            lightIcon.classList.remove('hidden');
        }
    }
}

// 2. Tab Navigation Logic (Home vs Research Experience)
function switchTab(tabName) {
    const homeTab = document.getElementById('tab-home');
    const researchTab = document.getElementById('tab-research');
    const btnHome = document.getElementById('tab-btn-home');
    const btnResearch = document.getElementById('tab-btn-research');

    if (tabName === 'home') {
        homeTab.classList.remove('hidden');
        researchTab.classList.add('hidden');

        btnHome.className = "nav-tab px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50";
        btnResearch.className = "nav-tab px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800";
    } else if (tabName === 'research') {
        homeTab.classList.add('hidden');
        researchTab.classList.remove('hidden');

        btnResearch.className = "nav-tab px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50";
        btnHome.className = "nav-tab px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800";
    }
}

// 3. Mobile Navigation Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// 4. Typewriter Animation Logic
const roles = ["Researcher", "Physiotherapist", "GFX Designer", "Statistical Analyzer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetween = 2000;

function typeEffect() {
    const currentRole = roles[roleIndex];
    const typingElement = document.getElementById("typing-text");

    if (!typingElement) return;

    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetween);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    }
}

// Initialize on DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    typeEffect();
});
