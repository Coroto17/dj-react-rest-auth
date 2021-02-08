import React from "react";
import axios from "axios";

import { Button, Card } from "antd";

import CustomForm from "../components/Form";
import { connect } from "react-redux";

class ArticleDetail extends React.Component {
  state = {
    article: {},
  };
  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`/api/${articleID}/`).then((res) => {
      this.setState({
        article: res.data,
      });
    });
  }

  componentWillReceiveProps(newProps) {
    const articleID = this.props.match.params.articleID;
    console.log(newProps);
    if (newProps.token) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: newProps.token,
      };
      axios.get(`/api/${articleID}/`).then((res) => {
        this.setState({
          article: res.data,
        });
      });
    }
  }

  handleDelete = (event) => {
    const articleID = this.props.match.params.articleID;
    if (this.props.token) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${this.props.token}`,
      };
      axios.delete(`/api/${articleID}/`);
      this.props.history.push("/");
      this.forceUpdate();
    }
  };

  render() {
    return (
      <div>
        <Card title={this.state.article.title}>
          <p>{this.state.article.content}</p>
        </Card>
        {this.props.token ? (
          <div>
            <CustomForm
              requestType="put"
              articleID={this.props.match.params.articleID}
              btnText="Update"
            />
            <form onSubmit={this.handleDelete}>
              <Button type="danger" htmlType="submit">
                Delete
              </Button>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(ArticleDetail);
