// Correct implementation using Hooks
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Perform side effects here
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
    </View>
  );
};
export default MyComponent;
