import React, { Component, PropTypes } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import styles, { theme } from '../styles';
import { size } from '../utils';

export default class Icon extends Component {

    constructor(props) {
        super(props);

        this.theme = this.props.theme;
    }

    componentWillMount() {
        switch(this.props.type) {
            case 'ionicon':
                this.Icon = Ionicons;
                break;
            case 'evilicon':
                this.Icon = EvilIcons;
                break;
            case 'entypo':
                this.Icon = Entypo;
                break;
            case 'font-awesome':
                this.Icon = FontAwesome;
                break;
            case 'foundation':
                this.Icon = Foundation;
                break;
            case 'material':
                this.Icon = MaterialIcons;
                break;
            case 'material-community':
                this.Icon = MaterialCommunityIcons;
                break;
            case 'octicons':
                this.Icon = Octicons;
                break;
            case 'zocial':
                this.Icon = Zocial;
                break;
            case 'simple-line-icon':
                this.Icon = SimpleLineIcons;
                break;
            default:
                this.Icon = SimpleLineIcons;
        }
    }

    render() {
        const color = {color: this.props.color ? this.props.color : this.theme.navbarTintColor};
        return(
            <this.Icon
                name={this.props.name}
                size={this.props.size}
                style={[styles.iconStyle, color]}
            />
        );
    }

    static propTypes = {
        type: PropTypes.string,
        name: PropTypes.string,
        color: PropTypes.string,
        theme: PropTypes.object,
    };

    static defaultProps = {
        size: size.iconSize
    };
}
