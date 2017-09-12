import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import styled from 'styled-components';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

class Footer extends Component {
    state = { selectedIndex: 0 };

    select = (index) => this.setState({ selectedIndex: index });

    render() {
        const { className } = this.props;
        return (
            <footer className={className}>
                <Paper zDepth={1}>
                    <BottomNavigation selectedIndex={this.state.selectedIndex}>
                        <BottomNavigationItem
                            label="Main"
                            icon={recentsIcon}
                            onClick={() => this.select(0)}/>
                        <BottomNavigationItem
                            label="Favorites"
                            icon={favoritesIcon}
                            onClick={() => this.select(1)}/>
                        <BottomNavigationItem
                            label="Nearby"
                            icon={nearbyIcon}
                            onClick={() => this.select(2)}/>
                    </BottomNavigation>
                </Paper>
            </footer>
        );
    }
}

const StyledFooter = styled(Footer)`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 56px;
    z-index: 5;
`
export default StyledFooter;
