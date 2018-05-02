result = []

for num in 1..100
  if num % 3 == 0 && num % 5 == 0
    result << 'FIZZBUZZ'
  elsif num % 3 == 0
    result << 'FIZZ'
  elsif num % 5 == 0
    result << 'BUZZ'
  else
    result << num
  end
end

# print result

# Solution 2

result = []
for i in 1..100
  result << 'FIZZBUZZ' && next if i % 3 == 0 && i % 5 == 0
  result << 'FIZZ' && next if i % 3 == 0
  result << 'BUZZ' && next if i % 5 == 0
  result << i
end

print result

