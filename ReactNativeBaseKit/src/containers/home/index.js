import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import { arrayOf, shape, string, func } from 'prop-types';
import { connect } from 'react-redux';
import {AuthStyles} from '../../styles';
import {Button} from '../../components';
import Constants from '../../constants';
import * as userActions from '../../actions/user-actions-types';
import {logoutSuccess} from '../../actions/user-actions-types';
const styles = StyleSheet.create({
  container: {
    backgroundColor: Constants.Colors.DASHBOARD_BG_COLOR,
    flex: 1,
  },
  rowStyle: { padding: Constants.BaseStyle.PADDING },
  textStyle: { ...Constants.Fonts.regular },
});

class Home extends React.Component {
  componentDidMount() {
    const { getMovies,userDetails } = this.props;
    console.log('userDetails-----',userDetails)
    getMovies();
  }


  onLogout = () => {
    alert('dfjbs')
    // const { logoutSuccess } = this.props;
    logoutSuccess();
  }
  
  render() {
    const { movies,userDetails } = this.props;
    console.log('userDetails',userDetails)

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.container}
          data={movies}
          renderItem={({
            item: {
              title, releaseYear,
            },
          }) => (
            <View style={styles.rowStyle}>
              <Text style={styles.textStyle}>{title}</Text>
              <Text style={styles.textStyle}>
                {`Release Year: ${releaseYear}`}
              </Text>
              
            </View>
          )}
        />
        <Button
              onPress={this.onLogout}
              style={AuthStyles.logOutbuttonStyle}
              title={'Logout'}
            />
      </View>
    );
  }
}

Home.propTypes = {
  getMovies: func.isRequired,
  movies: arrayOf(
    shape({
      releaseYear: string.isRequired,
      title: string.isRequired,
    })
  ).isRequired,
};

ReactMixin(Home.prototype, TimerMixin);

const mapStateToProps = ({ user: { movies,userDetails } }) => ({ movies,userDetails });

export default connect(
  mapStateToProps,
  { getMovies: userActions.getMovies },
)(Home);
