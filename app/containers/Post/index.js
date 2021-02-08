/**
 *
 * Post
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectError,
  makeSelectLoading,
  makeSelectPost,
} from 'containers/App/selectors';
import { useForm } from 'react-hook-form';
import { loadPost } from '../App/actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { changeUsername } from './actions';
const key = 'post';

export function Post({ loading, error, posts, onGetData, onChangeUsername }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [data, setData] = useState({});
  useEffect(() => {
    onGetData();
  }, []);
  console.log(posts);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = kata => {
    // fetch('http://192.168.0.7:8081/aboutusinfo/save', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     aboutusDetails: data.aboutusDetails,
    //     aboutusNote: data.aboutusNote,
    //     aboutusType: data.aboutusType,
    //     cmsId: data.cmsId,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data));
    console.log(kata);
  };

  return (
    <div>
      <Helmet>
        <title>Post</title>
        <meta name="description" content="Description of Post" />
      </Helmet>
      <form onSubmit={handleSubmit(onChangeUsername)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input name="aboutusDetails" type="text" ref={register} /> <br />
        <input name="aboutusNote" type="text" ref={register} /> <br />
        <input name="aboutusType" type="text" ref={register} /> <br />
        <input name="cmsId" type="number" ref={register} /> <br />
        <input type="submit" />
      </form>
    </div>
  );
}

Post.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onGetData: PropTypes.func,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPost(),
  error: makeSelectError(),
  loading: makeSelectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: data => dispatch(changeUsername(data)),
    onGetData: () => dispatch(loadPost()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Post);
