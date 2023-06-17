import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import Result from './Result';

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso'],
      correctAnswer: 'Leonardo da Vinci',
    },
    {
      question: 'What is the capital of india?',
      options: ['Delhi', 'Mumbai', 'Goa'],
      correctAnswer: 'Delhi',
    },
    {
      question: 'Which part of human part named mathes follows?',
      options: ['Apple', 'Mango', 'Pinapple'],
      correctAnswer: 'Supra',
    },
    {
      question: 'Which car is most famous?',
      options: ['Supra', 'Mustang', 'Camaro'],
      correctAnswer: 'Supra',
    },
    {
      question: 'Which indian-cricket is most famous?',
      options: ['Sachin', 'Lee', 'chrisGell'],
      correctAnswer: 'Sachin',
    },
    {
      question: 'Which indian-cricket is most famous?',
      options: ['Sachin', 'Lee', 'chrisGell'],
      correctAnswer: 'Sachin',
    },
    {
      question: 'Which indian-cricket is most famous?',
      options: ['Sachin', 'Lee', 'chrisGell'],
      correctAnswer: 'Sachin',
    },
    {
      question: 'Which indian-cricket is most famous?',
      options: ['Sachin', 'Lee', 'chrisGell'],
      correctAnswer: 'Sachin',
    },
    {
      question: 'Which indian-cricket is most famous?',
      options: ['Sachin', 'Lee', 'chrisGell'],
      correctAnswer: 'Sachin',
    },

    // Add more quiz questions here
  ];

  const handleAnswer = selectedAnswer => {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 5);
    }
    if (currentQuestionIndex <= quizData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    console.warn(currentQuestionIndex);
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            marginBottom: 20,
            marginLeft: 20,
            color: '#000',
          }}>
          Quiz Questions :{' ' + currentQuestionIndex + '/' + quizData.length}
        </Text>
      </View>

      <Text style={{fontSize: 20, marginBottom: 20}}>{quizData.question}</Text>
      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: 'black',
            height: 50,
            width: 300,
            borderRadius: 10,
            marginLeft: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}
          key={index}
          title={option}
          onPress={() => handleAnswer(option)}>
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}

      {currentQuestionIndex === quizData.length ? (
        <Result onPress={handleReset} score={score} qlength={quizData.length} />
      ) : null}
    </View>
  );
};

export default QuizApp;
