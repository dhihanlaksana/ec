export default {
  general: {
    error: {
      summary: 'Something Wrong',
      detail: 'failed perform action, retry or contact admin',
    },

    btn: {
      back: 'back',
    },
    field: {
      placeholder: 'Entry {field}',
    },
    message: {
      please_wait: 'Please wait...',
      loading: 'Loading',
      success: 'Success',
      failed: 'Failed'
    },

    copyright: '2023 PT. Mitra Pinasthika Mulia. All rights reserved.'
  },

  pages: {
    login: {
      title: 'Login',
      username: 'Username',
      password: 'Password',
      dealer_code: 'Dealer Code',
      submit: 'Login',
      description: 'Quickly get started by signing in using your existing accounts',
      account_not_found: 'Account is not found',
    },
    home: {
      title: 'Welcome to The MOSA Back Office'
    }
  },

  validation: {
    alpha: '{field} is only consist of alphabet',
    alpha_num: '{field} is only consist of aplhanumeric',
    alpha_dash:
      '{field} is only consist of aplhanumeric, hyphen and underline',
    alpha_spaces: '{field} is only consist of alphabet and space',
    between: '{field} should be in between 0:{min} and 1:{max}',
    confirmed: '{field} does not match with {target}',
    digits: '{field} should be 0:{length} digits',
    dimensions:
      '{field} should have dimension for width 0:{width} pixel and height 1:{height} pixel',
    email: '{field} should be a correct email',
    excluded: '{field} should be in a correct value',
    ext: '{field} should be a correct file',
    image: '{field} should be an image',
    integer: '{field} should be integer',
    length: ' {field} length should be precisely at 0:{length}',
    max_value: '{field} value should not be more than 0:{max}',
    max: '{field} should not be more than 0:{length} character',
    mimes: '{field} file type should be correct',
    min_value: '{field} value should not be less than 0:{min}',
    min: '{field} at least consist of 0:{length} character',
    numeric: '{field} should be a number',
    one_of: '{field} should have a valid value',
    regex: '{field} format is wrong',
    required: '{field} should not be empty',
    required_if: '{field} should not be empty',
    size: '{field} filesize should be less than 0:{size}KB',
  },
}
