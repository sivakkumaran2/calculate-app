import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tsconfig.json';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  const handleButtonClick = (value: string) => {
    if (value === 'AC') {
      setInput('');
      setResult('');
      setIsResultDisplayed(false);
    } else if (value === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult.toString());
        setIsResultDisplayed(true);
      } catch (error) {
        setResult('Error');
        setIsResultDisplayed(false);
      }
    } else if (value === '+/-') {
      if (isResultDisplayed) {
        setInput(result.startsWith('-') ? result.slice(1) : '-' + result);
        setResult('');
        setIsResultDisplayed(false);
      } else {
        setInput(input.startsWith('-') ? input.slice(1) : '-' + input);
      }
    } else {
      if (isResultDisplayed) {
        if (['+', '-', '*', '/', '%'].includes(value)) {
          setInput(result + value);
        } else {
          setInput(value);
        }
        setResult('');
        setIsResultDisplayed(false);
      } else {
        setInput(input + value);
      }
    }
  };

  const Button = ({ value, style, textStyle }: { value: string; style: string; textStyle: string }) => (
    <TouchableOpacity style={style} onPress={() => handleButtonClick(value)}>
      <Text style={textStyle}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <TailwindProvider utilities={utilities}>
      <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'black' }}>
        <ScrollView horizontal style={{ height: 100 }}>
        <Text style={{ textAlign: 'right', color: 'white', fontSize: 90, padding: 5, bottom: -380, justifyContent: 'flex-end' }}>
  {result || input || '0'}
</Text>

        </ScrollView>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', margin: 8 }}>
          <Button value="AC" style={{ width: 80, height: 80, backgroundColor: '#4B5563', borderRadius: 40, justifyContent: 'center', alignItems: 'center', margin: 4 }} textStyle={{ fontSize: 24, color: 'black' }} />
          <Button value="+/-" style={{ width: 80, height: 80, backgroundColor: '#4B5563', borderRadius: 40, justifyContent: 'center', alignItems: 'center', margin: 4 }} textStyle={{ fontSize: 24, color: 'black' }} />
          <Button value="%" style={{ width: 80, height: 80, backgroundColor: '#4B5563', borderRadius: 40, justifyContent: 'center', alignItems: 'center', margin: 4 }} textStyle={{ fontSize: 24, color: 'black' }} />
          <Button value="/" style={{ width: 80, height: 80, backgroundColor: '#F59E0B', borderRadius: 40, justifyContent: 'center', alignItems: 'center', margin: 4 }} textStyle={{ fontSize: 24, color: 'white' }} />
          <Button value="7" style={{ width: 80, height: 80, backgroundColor: '#1F2937', borderRadius: 40, justifyContent: 'center', alignItems: 'center', margin: 4 }} textStyle={{ fontSize: 24, color: 'white' }} />
          <Button value="8" style={{ width: 80, height: 80, backgroundColor: '#1F2937', borderRadius: 40, justifyContent: 'center', alignItems: 'center', margin: 4 }} textStyle={{ fontSize: 24, color: 'white' }} />
          <Button value="9" style={{ width: 80, height: 80, backgroundColor: '#1F2937', borderRadius: 40, justifyContent: 'center', alignItems: 'center', margin: 4 }} textStyle={{ fontSize: 24, color: 'white' }} />
          <Button value="*" style={{ width: 80, height: 80, backgroundColor: '#F59E0B', borderRadius: 40, justifyContent: 'center', alignItems: 'center', margin: 4 }} textStyle={{ fontSize: 24, color: 'white' }} />
          <Button value="4" style={{ width: 80, height: 80, backgroundColor: '#1F2937', borderRadius: 40, justifyContent: 'center', alignItems: 'center', margin: 4 }} textStyle={{ fontSize: 24, color: 'white' }} />
          <Button value="5" style={{ width: 80, height: 80, backgroundColor: '#1F2937', borderRadius: 40, justifyContent: 'center', alignItems: 'center', margin: 4 }} textStyle={{ fontSize: 24, color: 'white' }} />
          <Button value="6" style={{ width: 80, height: 80, backgroundColor: '#1F2937', borderRadius: 40, justifyContent: 'center', alignItems: 'center', margin: 4 }} textStyle={{ fontSize: 24, color: 'white' }} />
          <Button value="-" style={{ width: 80, height: 80, backgroundColor: '#F59E0B', borderRadius: 40, justifyContent: 'center', alignItems: 'center', margin: 4 }} textStyle={{ fontSize: 24, color: 'white' }} />
          <Button value="1" style={{ width: 80, height: 80, backgroundColor: '#1F2937', borderRadius: 40, justifyContent: 'center', alignItems: 'center', margin: 4 }} textStyle={{ fontSize: 24, color: 'white' }} />
          <Button value="2" style={{ width: 80, height: 80, backgroundColor: '#1F2937', borderRadius: 40, justifyContent: 'center', alignItems: 'center', margin: 4 }} textStyle={{ fontSize: 24, color: 'white' }} />
          <Button value="3" style={{ width: 80, height: 80, backgroundColor: '#1F2937', borderRadius: 40, justifyContent: 'center', alignItems: 'center', margin: 4 }} textStyle={{ fontSize: 24, color: 'white' }} />
          <Button value="+" style={{ width: 80, height: 80, backgroundColor: '#F59E0B', borderRadius: 40, justifyContent: 'center', alignItems: 'center', margin: 4 }} textStyle={{ fontSize: 24, color: 'white' }} />
          <Button value="0" style={{ width: 184, height: 80, backgroundColor: '#1F2937', borderRadius: 40, justifyContent: 'center', alignItems: 'center', margin: 4 }} textStyle={{ fontSize: 24, color: 'white' }} />
          <Button value="." style={{ width: 80, height: 80, backgroundColor: '#1F2937', borderRadius: 40, justifyContent: 'center', alignItems: 'center', margin: 4 }} textStyle={{ fontSize: 24, color: 'white' }} />
          <Button value="=" style={{ width: 80, height: 80, backgroundColor: '#F59E0B', borderRadius: 40, justifyContent: 'center', alignItems: 'center', margin: 4 }} textStyle={{ fontSize: 24, color: 'white' }} />
        </View>
      </View>
    </TailwindProvider>
  );
};

export default Calculator;
