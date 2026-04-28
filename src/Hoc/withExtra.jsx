function withExtra(Component){
    return function(props){
        return (
            <div>
                <h2>HOC</h2>
                <Component {...props}/>
            </div>
        )
    }
}
export default withExtra