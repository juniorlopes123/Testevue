const MyNameApp = {
    data() {
        return {
            name: "",
            input_name: ""
        }
    },
    methots: {
        submitForm(e){

        e.preventDefalt()

        console.log("caiu aqui")

        }
    }
}

VTTCue.createApp(MyNameApp).mount("#app");