const data = {
    user: {
      profile: {
        name: 'John Doe',
        address: {
          city: 'New York',
          zip: '10001'
        }
      }
    }
  }

const getNestedProperty = (obj, path) => {
    const keys = path.split('.');
  
    const getValue = (acc, key) => {
        return acc ? acc[key] : undefined;
    }
  
    return keys.reduce(getValue, obj);
  }


  const result = getNestedProperty(data, 'user.profile.address.zip')
  console.log(result)