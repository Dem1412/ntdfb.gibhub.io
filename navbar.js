document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
    <style>
        /* --- ฟอนต์ FC Active และ Smooth Scroll --- */
        @font-face {
            font-family: 'FC Active';
            src: url('https://cdn.jsdelivr.net/gh/wasantiseeno/font@main/FCActive-Regular.ttf') format('truetype');
        }

        html { 
            scroll-behavior: smooth; 
        }

        /* --- Navbar Setup --- */
        .navbar-global {
            font-family: 'FC Active', sans-serif !important;
            background-color: #FFD200 !important;
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            padding: 0 5% !important;
            height: 85px !important; 
            border-bottom: 4px solid #e6bd00 !important;
            width: 100% !important;
            position: sticky !important;
            top: 0 !important;
            z-index: 9999 !important;
            box-sizing: border-box !important;
        }

        .logo-area-global {
            display: flex !important;
            align-items: center !important;
            gap: 15px !important;
            text-decoration: none !important;
        }

        .nav-logo-global {
            height: 60px !important; 
            width: auto !important;
        }

        .brand-name-global {
            font-size: 32px !important; /* ปรับขนาดให้เข้ากับฟอนต์ FC Active */
            font-weight: bold !important;
            color: #333 !important;
            line-height: 1 !important;
        }

        /* --- Navigation Links --- */
        .nav-links-global {
            list-style: none !important;
            display: flex !important;
            gap: 10px !important;
            margin: 0 !important;
            padding: 0 !important;
            align-items: center !important;
        }

        .nav-links-global li {
            position: relative !important;
        }

        .nav-links-global li a {
            text-decoration: none !important;
            color: #333 !important;
            padding: 10px 15px !important;
            font-size: 22px !important; /* ฟอนต์แนวนี้ขนาด 22-24px จะสวยมาก */
            font-weight: 500 !important;
            display: block !important;
            transition: 0.3s !important;
            border-radius: 10px !important;
        }

        .nav-links-global li a:hover {
            background-color: rgba(255, 255, 255, 0.4) !important;
            color: #d40000 !important;
        }

        /* --- Dropdown System --- */
        .dropdown-menu-global {
            display: none !important;
            position: absolute !important;
            top: 100% !important;
            left: 0 !important;
            background-color: #ffffff !important;
            min-width: 240px !important;
            box-shadow: 0px 10px 20px rgba(0,0,0,0.15) !important;
            list-style: none !important;
            padding: 10px 0 !important;
            margin: 0 !important;
            border-radius: 0 0 15px 15px !important;
            border-top: 5px solid #d40000 !important;
        }

        /* สั่งให้แสดงผลเมื่อ Hover */
        .nav-links-global li:hover .dropdown-menu-global {
            display: block !important;
            animation: fadeInMenu 0.3s ease-out;
        }

        .dropdown-menu-global li a {
            padding: 12px 20px !important;
            font-size: 20px !important;
            border-radius: 0 !important;
        }

        .dropdown-menu-global li a:hover {
            background-color: #fff4bd !important;
            padding-left: 25px !important;
        }

        .has-submenu::after {
            content: ' ▾' !important;
            font-size: 16px !important;
        }

        /* --- Mobile Toggle --- */
        .nav-toggle-global {
            display: none !important;
            flex-direction: column !important;
            gap: 5px !important;
            cursor: pointer !important;
            padding: 10px !important;
        }

        .nav-toggle-global span {
            width: 30px !important;
            height: 4px !important;
            background-color: #333 !important;
            border-radius: 5px !important;
        }

        /* --- Responsive สำหรับหน้าจอมือถือ --- */
        @media (max-width: 1024px) {
            .nav-toggle-global { display: flex !important; }
            
            .nav-links-global {
                display: none !important;
                flex-direction: column !important;
                position: absolute !important;
                top: 85px !important;
                left: 0 !important;
                width: 100% !important;
                background-color: #FFD200 !important;
                padding: 20px 0 !important;
                border-bottom: 4px solid #e6bd00 !important;
            }

            .nav-links-global.active {
                display: flex !important;
            }

            .dropdown-menu-global {
                position: static !important;
                box-shadow: none !important;
                background-color: rgba(255,255,255,0.5) !important;
                border-top: none !important;
                width: 100% !important;
                padding-left: 20px !important;
            }
            
            .brand-name-global { font-size: 26px !important; }
        }

        @keyframes fadeInMenu {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>

    <nav class="navbar-global">
        <a href="index.html" class="logo-area-global">
            <img src="logo.png" class="nav-logo-global" alt="Logo"> 
            <span class="brand-name-global">เว็ปไซต์เพื่อการศึกษา</span>
        </a>

        <div class="nav-toggle-global" id="navToggle">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <ul class="nav-links-global" id="navLinks">
            <li><a href="index.html">หน้าแรก</a></li>

            <li>
                <a href="#" class="has-submenu">เกมเช็ด ปัด จัด ใช้</a>
                <ul class="dropdown-menu-global">
                    <li><a href="index2.html">มาลองเล่นเกมกัน</a></li>
                    <li><a href="index4.html">ดาวน์โหลดเกม</a></li>
                </ul>
            </li>

            <li>
                <a href="#" class="has-submenu">กิจกรรมชวนคิด</a>
                <ul class="dropdown-menu-global">
                    <li><a href="index6.html">ฝึกสมองก่อนเรียน</a></li>
                    <li><a href="index7.html">วัดความรู้หลังเรียน</a></li> 
                    <li><a href="index8.html">เกมเขาวงกตสุดหรรษา</a></li>
                    <li><a href="index3.html">เกม ZEP QUIZ</a></li>
                </ul>
            </li>

            <li><a href="index5.html">ผู้พัฒนา</a></li>
        </ul>
    </nav>`;
    
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // ระบบ Toggle สำหรับมือถือ
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    if(toggle) {
        toggle.addEventListener('click', function() {
            links.classList.toggle('active');
        });
    }
});