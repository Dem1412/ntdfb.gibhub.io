document.addEventListener("DOMContentLoaded", function() {
    const fooHTML = `
    <style>
        /* --- การตั้งค่าฟอนต์และพื้นฐานหน้าเว็บ --- */
        @font-face {
            font-family: 'FC Active';
            src: url('https://cdn.jsdelivr.net/gh/wasantiseeno/font@main/FCActive-Regular.ttf') format('truetype');
        }

        html { 
            scroll-behavior: smooth; 
        }

        body {
            font-family: 'FC Active', sans-serif;
            margin: 0; /* ป้องกันขอบขาวรอบตัวเว็บ */
        }

        /* --- Footer Styles --- */
        .main-footer { 
            background-color: #333; 
            padding: 50px 0 30px; /* ปรับ padding ให้สมดุล */
            text-align: center; 
            color: white; 
            border-top: 5px solid #FFD200; 
            font-family: 'FC Active', sans-serif;
            width: 100%; /* บังคับให้ footer เต็มความกว้างเสมอ */
        }
        
        .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px;
            padding: 0 20px; /* เพิ่ม padding ข้างในเพื่อไม่ให้เนื้อหาติดขอบจอ */
        }

        .footer-logo { 
            height: 150px; 
            width: auto; 
            filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5));
            transition: transform 0.3s ease;
        }
        
        .footer-logo:hover {
            transform: scale(1.08);
        }

        .facebook-link { 
            display: inline-flex; 
            align-items: center; 
            gap: 12px; 
            text-decoration: none; 
            color: #eeeeee; 
            font-size: 20px; 
            transition: all 0.3s ease;
            padding: 12px 28px;
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 50px;
            background: rgba(255,255,255,0.05);
        }
        
        .facebook-link:hover { 
            color: #FFD200; 
            background: rgba(255,255,255,0.12);
            border-color: #FFD200;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        
        .facebook-icon { 
            width: 26px; 
            height: 26px;
        }
        
        /* แก้ไขส่วนนี้เพื่อให้เส้นขีดกว้างตามหน้าจอ */
        .footer-credits-wrapper {
            width: 100%; /* ให้ wrapper กว้าง 100% ของจอ */
            margin-top: 30px;
            border-top: 1px solid rgba(255,255,255,0.1); /* ย้ายเส้นมาไว้ที่ wrapper */
            padding-top: 20px;
        }

        .footer-credits {
            font-size: 16px;
            color: #bbb;
            letter-spacing: 0.5px;
            line-height: 1.6;
        }

        /* สำหรับมือถือ */
        @media (max-width: 600px) {
            .facebook-link {
                font-size: 16px;
                padding: 10px 20px;
                width: 85%;
                justify-content: center;
            }
            .footer-logo {
                height: 110px;
            }
        }
    </style>

    <footer class="main-footer">
        <div class="footer-container">
            <div class="logo-wrapper">
                <img src="https://img5.pic.in.th/file/secure-sv1/366522019_788998766349688_8149955190103127937_n.png" 
                     alt="โลโก้" 
                     class="footer-logo">
            </div>

            <a href="https://www.facebook.com/ced.mcru" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="facebook-link">
                <img src="https://img2.pic.in.th/2021_Facebook_icon.svg.png" 
                     alt="Facebook Icon" 
                     class="facebook-icon">
                <span>คอมพิวเตอร์ศึกษา มหาวิทยาลัยราชภัฏหมู่บ้านจอมบึง</span>
            </a>
        </div>

        <div class="footer-credits-wrapper">
            <div class="footer-credits">
                &copy; ${new Date().getFullYear()} เกมเช็ด ปัด จัด ใช้ ให้ถูกวิธี - All Rights Reserved
                <br>
                <span style="opacity: 0.5; font-size: 14px;">Powered by DCE MCRU</span>
            </div>
        </div>
    </footer>`;
    
    document.body.insertAdjacentHTML('beforeend', fooHTML);
});