import { default as Box } from '3box';
import React, { Component } from 'react';

import {Platform, StyleSheet, Text, View} from 'react-native';


export class ThreeBoxDisplayExample extends Component {
    constructor(props) {
        super(props);
        var that = this;
        that._j3BoxData = "";
        Box.getProfile(this.props["ethaddr"]).then(function (res) {
            that._j3BoxData = res;
            that.forceUpdate();
        });
    }
    render() {
        var v = require("util");
        return (
            <View>
            <Text>ThreeBox Address:</Text>
            <Text>{this.props["ethaddr"]}</Text>
            <Text>{v.inspect(this._j3BoxData)}</Text>
            </View>
        );
    }
}