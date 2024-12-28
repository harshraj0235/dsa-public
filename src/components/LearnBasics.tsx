import React from 'react';
import { useHistory } from 'react-router-dom';

const LearnTheBasics = () => {
  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-600">DSA Learning Hub</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 border-l-4 border-green-500">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">Step 1: Learn the basics</h2>
        <p className="text-gray-600 mb-4">0 / 31</p>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-yellow-600">Lec 1: Things to Know in C++/Java/Python or any language</h3>
          <p className="text-gray-600 mb-4">0 / 9</p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-green-100">
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-left">Problem</th>
                  <th className="py-2 px-4 text-left">Solution</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">User Input / Output</td>
                  <td className="py-2 px-4">Easy</td>
                  <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Data Types</td>
                  <td className="py-2 px-4">Easy</td>
                  <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">If Else statements</td>
                  <td className="py-2 px-4">Easy</td>
                  <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Switch Statement</td>
                  <td className="py-2 px-4">Easy</td>
                  <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">What are arrays, strings?</td>
                  <td className="py-2 px-4">Easy</td>
                  <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">For loops</td>
                  <td className="py-2 px-4">Easy</td>
                  <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">While loops</td>
                  <td className="py-2 px-4">Easy</td>
                  <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Functions (Pass by Reference and Value)</td>
                  <td className="py-2 px-4">Easy</td>
                  <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Time Complexity [Learn Basics, and then analyse in next Steps]</td>
                  <td className="py-2 px-4">Easy</td>
                  <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 border-l-4 border-green-500">
        <h3 className="text-xl font-semibold mb-2 text-yellow-600">Lec 2: Build-up Logical Thinking</h3>
        <p className="text-gray-600 mb-4">0 / 1</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-green-100">
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Problem</th>
                <th className="py-2 px-4 text-left">Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">Patterns</td>
                <td className="py-2 px-4">Easy</td>
                <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 border-l-4 border-green-500">
        <h3 className="text-xl font-semibold mb-2 text-yellow-600">Lec 3: Learn STL/Java-Collections or similar thing in your language</h3>
        <p className="text-gray-600 mb-4">0 / 2</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-green-100">
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Problem</th>
                <th className="py-2 px-4 text-left">Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">C++ STL</td>
                <td className="py-2 px-4">Medium</td>
                <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Java Collections</td>
                <td className="py-2 px-4">Easy</td>
                <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 border-l-4 border-green-500">
        <h3 className="text-xl font-semibold mb-2 text-yellow-600">Lec 4: Know Basic Maths</h3>
        <p className="text-gray-600 mb-4">0 / 7</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-green-100">
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Problem</th>
                <th className="py-2 px-4 text-left">Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">Count Digits</td>
                <td className="py-2 px-4">Easy</td>
                <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Reverse a Number</td>
                <td className="py-2 px-4">Easy</td>
                <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Check Palindrome</td>
                <td className="py-2 px-4">Easy</td>
                <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">GCD Or HCF</td>
                <td className="py-2 px-4">Easy</td>
                <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Armstrong Numbers</td>
                <td className="py-2 px-4">Easy</td>
                <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Print all Divisors</td>
                <td className="py-2 px-4">Easy</td>
                <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Check for Prime</td>
                <td className="py-2 px-4">Easy</td>
                <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 border-l-4 border-green-500">
        <h3 className="text-xl font-semibold mb-2 text-yellow-600">Lec 5: Learn Basic Recursion</h3>
        <p className="text-gray-600 mb-4">0 / 9</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-green-100">
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Problem</th>
                <th className="py-2 px-4 text-left">Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">Understand recursion by print something N times</td>
                <td className="py-2 px-4">Easy</td>
                <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Print name N times using recursion</td>
                <td className="py-2 px-4">Easy</td>
                <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Print 1 to N using recursion</td>
                <td className="py-2 px-4">Easy</td>
                <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Print N to 1 using recursion</td>
                <td className="py-2 px-4">Easy</td>
                <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Sum of first N numbers</td>
                <td className="py-2 px-4">Easy</td>
                <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Factorial of N numbers</td>
                <td className="py-2 px-4">Easy</td>
                <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Reverse an array</td>
                <td className="py-2 px-4">Easy</td>
                <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Check if a string is palindrome or not</td>
                <td className="py-2 px-4">Medium</td>
                <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Fibonacci Number</td>
                <td className="py-2 px-4">Easy</td>
                <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 border-l-4 border-green-500">
        <h3 className="text-xl font-semibold mb-2 text-yellow-600">Lec 6: Learn Basic Hashing</h3>
        <p className="text-gray-600 mb-4">0 / 3</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-green-100">
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Problem</th>
                <th className="py-2 px-4 text-left">Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">Hashing Theory</td>
                <td className="py-2 px-4">Medium</td>
                <td className="py-2 px-4"><a href="#" className="bg-green-500 text-white px-4 py-2 rounded">Solution</a></td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Counting frequencies of array elements</td>
                <td className="py-2 px-4">Easy</td>
                <td className="py-2 px-4"><a href="#" className="bg-green
