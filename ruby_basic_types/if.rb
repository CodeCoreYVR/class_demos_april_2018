print 'Give me a number: '
number = gets.to_f

if number > 1000
  puts 'The number is very large'
elsif number > 500
  puts 'The number is large'
elsif number > 100
  puts 'The number is medium'
else
  puts 'The number is small'
end

# in Ruby you can do the code as below because almost everything in Ruby is an 
# expression meaning that it returns something back
result = if number > 1000
           'The number is very large'
         elsif number > 500
           'The number is large'
         elsif number > 100
           'The number is medium'
         else
           'The number is small'
         end

puts result
