import className from  '../assets/styles/footer.styl'
export default {
    data(){
      return {
          author:'Amy'
      }
    },
    render() {
        return (
            <div id={className.footer}>
                <span>Written by {this.author}</span>
            </div>
        )
    }
}