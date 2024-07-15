// Basic JavaScript Programs

        // 1. FIZZ, BUZZ, FIZZBUZZ
        // function func()
        // {
        //     for (let i=1;i<=15;i++)
        //     {
        //         if (i%3==0 && i%5!=0)
        //         {
        //             console.log("FIZZ")
        //         }
        //         else if (i%3!=0 && i%5==0)
        //         {
        //             console.log("BUZZ")
        //         }
        //         else if (i%3==0 && i%5==0)
        //         {
        //             console.log("FIZZBUZZ")
        //         }
        //         else
        //         {
        //             console.log(i)
        //         }
        //     }
        // }
        // func()

        // 2. Palindrome
        // function palindrome(word)
        // {
        //     let l=0
        //     let r=word.length-1
        //     let flag=1
        //     while(l<r)
        //     {
        //         if (word[l]==word[r])
        //         {
        //             l++
        //             r--
        //         }
        //         else
        //         {
        //             flag=0
        //             break
        //         }
        //     }
        //     if (flag==1)
        //     {
        //         return true
        //     }
        //     else
        //     {
        //         return false
        //     }
        // }
        // console.log(palindrome("malayalam"))

        // 3. Largest Number in array
        // function largestnumber(arr)
        // {
        //     let largest=arr[0]
        //     for (let i=1;i<arr.length;i++)
        //     {
        //         if (arr[i]>largest)
        //         {
        //             largest=arr[i]
        //         }
        //     }
        //     return largest
        // }
        // console.log(largestnumber([1,4,6,8,2,4,9,10]))

        // 4. Occurance of Character
        // function Occurance(word)
        // {
        //     let obj = {}
        //     for(let i=0;i<word.length;i++)
        //     {
        //         if(obj[word[i]]>=1)
        //         {
        //             obj[word[i]]+=1
        //         }
        //         else
        //         {
        //             obj[word[i]]=1
        //         }
        //     }
        //     return obj
        // }
        // console.log(Occurance("engineering"))

        // 5.longest word in string
        // function longestword(sentence)
        // {
        //     let arr=sentence.split(" ")
        //     let maxword=arr[0]
        //     let maxlen=arr[0].length
        //     for (let i=1;i<arr.length;i++)
        //     {
        //         if (arr[i].length>maxlen)
        //         {
        //             maxlen=arr[i].length
        //             maxword=arr[i]
        //         }
        //     }
        //     return maxword
        // }
        // console.log(longestword("Python is the best Programming Language"))

        // 6.factorial
        // function fact(num)
        // {
        //     let factorial=1
        //     for (let i=num;i>1;i--)
        //     {
        //         factorial*=i
        //     }
        //     return factorial
        // }
        // console.log(fact(5))

        // 7. Celsius --> Fahrenheit
        // function convert(cel)
        // {
        //     return cel+273
        // }
        // console.log(convert(100))

        // 8. find the missing Number
        // function missing(arr)
        // {
        //     let arraysum=0
        //     let originalsum=0
        //     for(let i=0;i<arr.length;i++)
        //     {
        //         arraysum+=arr[i]
        //         originalsum+=i+1
        //     }
        //     return originalsum-arraysum
        // }
        // console.