let sports = () => {
    try {
        let args = arguments;
    } catch(error) {
        console.log('화살표 함수는 arugments 프로퍼티 사용 불가')
    }
}
sports(1,2);