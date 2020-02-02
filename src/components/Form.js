import React, {Component} from "react";
import PropTypes from "prop-types";
import {Grid, Button, TextField} from "@material-ui/core";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.values ? props.values.title : "",
            description: props.values ? props.values.description : "",
            city: props.values ? props.values.city : "",
            image: props.values ? props.values.image : ""
        };
    }

    static propTypes = {
      onSubmit: PropTypes.func.isRequired
    };

    changeHandler = e => this.setState({[e.target.name]: e.target.value});

    submitHandler = e => {
        e.preventDefault();
        const {title, description, city, image} = this.state;
        const { onSubmit, clsModal } = this.props;

        const data = {
            title,
            description,
            city,
            image
        };

      onSubmit(data, clsModal);
    };

    render() {
        const {title, description, city, image} = this.state;
        const {clsModal, values = {}} = this.props;
        return (
            <form onSubmit={this.submitHandler}>
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                >
                    <TextField
                        id="standard-password-input"
                        label="Title"
                        type="text"
                        name="title"
                        placeholder="Title"
                        defaultValue={values.title || title}
                        onChange={this.changeHandler}
                    />
                    <TextField
                        type="text"
                        name="description"
                        label="Description"
                        placeholder="Title"
                        defaultValue={values.description || description}
                        onChange={this.changeHandler}
                    />
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                >
                    <TextField
                        type="text"
                        name="city"
                        label="City"
                        placeholder="What city the vacancy for?"
                        defaultValue={values.city || city}
                        onChange={this.changeHandler}
                    />
                    <TextField
                        type="url"
                        name="image"
                        label="image"
                        placeholder="Set image url"
                        defaultValue={values.image || image}
                        onChange={this.changeHandler}
                    />
                </Grid>

                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                    style={{ marginTop: 30 }}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{margin: "10px 0 10px 0"}}
                    >
                        Підтвердити
                    </Button>

                    <Button
                        variant="contained"
                        color="secondary"
                        style={{margin: "10px 0 10px 0"}}
                        onClick={clsModal}
                    >
                        Закрити
                    </Button>
                </Grid>
            </form>
        );
    }
}

export default Form;
