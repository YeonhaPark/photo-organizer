## photo-organizer 실행하는 법

안녕하세요!

해당 애플리케이션은 node로 터미널에서 실행할 경우 아이폰에 저장되어 있는 사진을 1) 아이폰에서 직접 찍은 사진 2) 캡처한 사진 3) 인터넷에서 다운로드한 사진 4) 비디오 네 가지로 분류한 뒤 폴더를 생성해서 넣어줍니다.

명령어는 아래와 같습니다.

```zsh
node organizer organizer [현재경로] [분류된 파일이 이동할 경로]
```

[분류된 파일이 이동할 경로]는 생략 가능하고, 생략하면 현재 경로에 그대로 폴더가 생성됩니다!
