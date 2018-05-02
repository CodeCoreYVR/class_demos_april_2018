# Solution 1
words = []
print 'Please enter: '
sentence = gets.chomp

words.push(sentence.split)
words.flatten!
words.map! {|word| word.capitalize }
puts words

# Solution 2
array = gets.chomp.split 
puts array.map {|x| x.capitalize }.join(' ')

# Solution 3
print 'Give me a sentence: '
# puts gets.chomp.split.map {|x| x.capitalize }.join(' ')

puts gets.chomp.split.map(&:capitalize).join(' ')