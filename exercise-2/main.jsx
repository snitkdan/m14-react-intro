// Main.jsx file

// Create a simple component
var SimpleDynamicComponent = React.createClass({
    // In your render function...
    render: function() {
        // Return div with two paragraphs
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        )
    }
});

// Render your component in the `main` section
ReactDOM.render(
    <SimpleDynamicComponent name='hello'/>, document.querySelector('body');)
