import React from "react";

class MySpanComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { className: 'letter', value: props.value, color: props.color };
    }

    handleMouseEnter = () => {
        if (this.state.color) {
            this.setState({ className: 'letter animated2' });

        } else
            this.setState({ className: 'letter animated' });


        setTimeout(() => {
            this.setState({ className: 'letter' });
        }, 1000)

    }



    render() {
        return (
            <span
                onMouseEnter={this.handleMouseEnter}
                className={this.state.className}
            >
                {this.state.value}
            </span>
        );
    }
}
export default MySpanComponent;