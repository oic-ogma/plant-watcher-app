import reducer from '../../src/reducers/ImageSearchReducer';
import * as types from '../../src/actions/types';

const INITIAL_STATE = {
  hasCameraPermission: null,
  loading: false,
  error: null
};

const IMAGE_SEARCH_PROCESSING_STATE = {
  hasCameraPermission: true,
  loading: true,
  error: null
};

const IMAGE_SEARCH_ERROR_STATE = {
  hasCameraPermission: true,
  loading: false,
  error: 'error'
};

describe('Article reducer', () => {
  it('初期のステートを戻す', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('CAMERA_PERMISSION_CHECKEDを処理できる', () => {
    expect(reducer(INITIAL_STATE, {
      type: types.CAMERA_PERMISSION_CHECKED,
      payload: true
    })).toEqual({
      ...INITIAL_STATE,
      hasCameraPermission: true
    });
  });

  it('IMAGE_SEARCH_PROCESSINGを処理できる', () => {
    expect(reducer(INITIAL_STATE, {
      type: types.IMAGE_SEARCH_PROCESSING,
    })).toEqual({
      ...INITIAL_STATE,
      loading: true
    });
  });

  it('IMAGE_SEARCH_SUCCESSを処理できる', () => {
    expect(reducer(IMAGE_SEARCH_PROCESSING_STATE, {
      type: types.IMAGE_SEARCH_SUCCESS,
    })).toEqual({
      ...IMAGE_SEARCH_PROCESSING_STATE,
      loading: false,
    });
  });

  it('IMAGE_SEARCH_ERRORを処理できる', () => {
    const errorMessage = 'error';
    expect(reducer(IMAGE_SEARCH_PROCESSING_STATE, {
      type: types.IMAGE_SEARCH_ERROR,
      payload: errorMessage
    })).toEqual({
      ...IMAGE_SEARCH_PROCESSING_STATE,
      loading: false,
      error: errorMessage
    });
  });

  it('IMAGE_SEARCH_RESETを処理できる', () => {
    expect(reducer(IMAGE_SEARCH_ERROR_STATE, {
      type: types.IMAGE_SEARCH_RESET,
    })).toEqual({
      ...IMAGE_SEARCH_ERROR_STATE,
      error: null,
    });
  });
});
