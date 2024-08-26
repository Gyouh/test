const videoElement = document.querySelector('video');
const videoS = document.querySelector('.video');
const playPauseButton = document.querySelector('#playBtn');

const CloseMenu = document.querySelector('#closeMenuBtn');
const menuElementH = document.querySelector('.menuElementH');

// Corrected selectors for volume icons
const highVolume = document.querySelector('.fa-volume-high');
const lowVolume = document.querySelector('.fa-volume-off');

const recDot = document.querySelector('recDot');


document.addEventListener('DOMContentLoaded', () =>{

    document.querySelector('body').style.opacity = 1;
    document.querySelector('body').style.transition = '.5s';

    CloseMenu.addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        if (menu.style.display === 'none' || menu.style.display === '')
        {
            menu.style.display = 'block';
            document.querySelector('body').style.overflow = 'hidden';
        }
        else
        {
            menu.style.display = 'none';
            document.querySelector('body').style.overflowY = 'scroll';
        }
        
        
    });

    
    // menuElementH.addEventListener('click', () => {
    //     const background = document.querySelector('video');
    //     background.style.opacity = '1';
    // });
    
    // menuElementH.addEventListener('mouseout', () => {
    //     const background = document.querySelector('video');
    //     background.style.opacity = '0';
    // });
    
    

    playPauseButton.addEventListener('click', () => 
        {
            // Toggle volume between 0 (muted) and 1 (full volume)
            if (videoElement.muted == true) {
                videoElement.volume = 1;  // Set volume to max (1.0)
                videoElement.muted = false; 
                playPauseButton.innerHTML = '<i style="display: inline;" class="fa-solid fa-volume-high"></i> VOLUME ON';
            } else {
                videoElement.volume = 0;  // Mute the video
                videoElement.muted = true; // 
                playPauseButton.innerHTML = '<i style="display: inline;" class="fa-solid fa-volume-off"></i> VOLUME OFF';
            }
        });
        

            // Lista wideo do odtworzenia
            const videoList = [
                "../videos/2024-07-09_20-35-42.mp4",
                "../videos/0806.mp4",
                "../videos/2024-06-29_18-39-04.mp4",
                "../videos/2024-07-09_11-44-39.mp4",
                "../videos/2024-07-09_20-35-42.mp4",
                "../videos/2024-06-16_22-06-55.mp4"
                ];
        
                let currentVideoIndex = 0;
        
                // const videoElement = document.getElementById('videoElement');
        
                // Funkcja do załadowania wideo
                function loadVideo(index) {
                    videoElement.src = videoList[index];
                    videoElement.load();
                    videoElement.play();
                }
        
                // Nasłuchiwanie zakończenia wideo
                videoElement.addEventListener('ended', () => {
                    currentVideoIndex++;
                    if (currentVideoIndex < videoList.length) {
                        loadVideo(currentVideoIndex);
                    } else {
                        // Restart playlisty od początku
                        currentVideoIndex = 0;
                        loadVideo(currentVideoIndex);
                    }
                });
        
                // Odtwarzanie pierwszego wideo po załadowaniu strony
                loadVideo(currentVideoIndex);


                
})



