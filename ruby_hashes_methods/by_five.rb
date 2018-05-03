def by_five?(num)
  num % 5 == 0
end

puts by_five?(10)
puts by_five?(5)
puts by_five?(6)

def divide(num1, num2)
  puts "The division results i #{num1 / num2}"
rescue
  puts 'Can\'t divide by zero'
end