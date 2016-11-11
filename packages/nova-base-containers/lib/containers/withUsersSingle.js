import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import Posts from "meteor/nova:posts";
import Users from "meteor/nova:users";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default function withUsersSingle (component, options) {
  return graphql(gql`
    query getUser($userId: String, $slug: String) {
      user(_id: $userId, slug: $slug) {
        ${Users.graphQLQueries.single}
      }
    }
    `, {
    options(ownProps) {
      return {
        variables: { userId: ownProps.userId, slug: ownProps.slug },
        // pollInterval: 20000,
      };
    },
  })(component);
}

module.exports = withUsersSingle;