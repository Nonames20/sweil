const express = require('express');
const app = express();

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yune's Profile</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body {
            background-image: url('https://s3.tebi.io/ely.bucket.s0.io.biti/3d8d1cb1e37058f924128b20dfb0feee.gif');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 20px;
        }
        .profile-box {
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        }
        @media (max-width: 640px) {
            .profile-box {
                width: 90%;
            }
        }
    </style>
</head>
<body>
    <div class="container mx-auto px-4 flex justify-center">
        <div class="profile-box bg-white bg-opacity-80 rounded-xl shadow-2xl p-8 w-96 max-w-full transition-all duration-300 hover:shadow-xl hover:bg-opacity-90 mx-auto">
            <div class="flex items-start space-x-4 mb-6">
                <div class="relative">
                    <div class="w-20 h-20 rounded-full bg-gradient-to-br from-pink-300 to-purple-400 overflow-hidden shadow-md">
                        <img src="https://s3.tebi.io/ely.bucket.s0.io.biti/54ef5a24da91b7d4079d7b8ea5237844.jpg" alt="Yune's Avatar" class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="flex-1">
                    <h1 class="text-2xl font-bold text-gray-800">Yune.</h1>
                    <p class="text-sm text-gray-600 mt-1">Sui no kaze</p>
                    <div class="flex space-x-2 mt-2">
                        <span class="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded-full">Artwork</span>
                        <span class="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Live wallpaper</span>
                    </div>
                </div>
            </div>

            <div class="mt-8 flex space-x-4">
                <a href="https://pin.it/5fQAjSnoI" class="flex-1 bg-gradient-to-r from-pink-400 to-purple-500 text-white py-2 px-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                    <i class="fab fa-pinterest mr-2"></i> Pinterest
                </a>
                <a href="https://discord.gg/MktqYwAseK" class="flex-1 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow hover:bg-gray-50 transition-all duration-300 flex items-center justify-center">
                    <i class="fab fa-discord mr-2"></i> Discord
                </a>
            </div>

            <div class="mt-6 pt-4 border-t border-gray-200">
                <div class="flex justify-between text-sm text-gray-500">
                    <div class="text-center">
                        <div class="font-bold text-gray-700">56+</div>
                        <div>Followers</div>
                    </div>
                    <div class="text-center">
                        <div class="font-bold text-gray-700">1.6k+</div>
                        <div>Viewer</div>
                    </div>
                    <div class="text-center">
                        <div class="font-bold text-gray-700">4+</div>
                        <div>Board</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
`;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(htmlContent);
});

function keepAlive() {
  app.listen(3000, () => {
    console.log('✅ Web Profile đang chạy tại port 3000!');
  });
}

module.exports = keepAlive;
