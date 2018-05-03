# numbers will come in as an array of all the arguement entered
def sum(*numbers)
  result = 0
  numbers.each {|num| result += num }
  result
end

sum()
sum(5, 6)
sum(5, 6, 6, 7, 0,8 ,9,9 ,9)