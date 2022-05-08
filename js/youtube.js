//youtube API 불러오는 부분
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//플레이어 변수 설정
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    //width&height를 설정할 수 있으나, 따로 css영역으로 뺐다.
    videoId: 'Tdwetb0Mvyc',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'Tdwetb0Mvyc'
    },
    events: {
      onReady: function(event) {
        event.target.mute()
      }
    }
  });
}