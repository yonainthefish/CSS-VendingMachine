class colaGenerator {
    constructor(){
        this.itemList = document.querySelector('.cola-machine .cola-menu');
    }

    async loadData(){
        
        
        try {
            const response = await fetch('./items.json');

            if (response.ok) {//서버의 응답 코드가 200 ~ 299일 경우
                return response.json();
            } else {
                throw new Error(response.status);
            }
        } catch (error){
            console.log(error);
        }
    }
}

export default ColaGenerator;