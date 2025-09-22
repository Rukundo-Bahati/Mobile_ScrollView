import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

const HorizontalScroll = () => {
  const horizontalItems = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Card ${index + 1}`,
    image: `https://picsum.photos/300/200?random=${index + 1}`
  }));

  return (
    <View style={styles.horizontalContainer}>
      <Text style={styles.sectionTitle}>Horizontal Scroll</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
        contentContainerStyle={styles.horizontalContent}
        decelerationRate="fast"
        snapToInterval={width * 0.8 + 16}
        snapToAlignment="center"
      >
        {horizontalItems.map((item) => (
          <View key={item.id} style={styles.horizontalCard}>
            <Image 
              source={{ uri: item.image }} 
              style={styles.horizontalImage}
            />
            <Text style={styles.horizontalTitle}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalContainer: {
    marginVertical: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    marginLeft: 16,
    color: '#333',
  },
  horizontalScroll: {
    paddingHorizontal: 8,
  },
  horizontalContent: {
    paddingHorizontal: 8,
  },
  horizontalCard: {
    width: width * 0.8,
    backgroundColor: 'white',
    borderRadius: 12,
    marginHorizontal: 8,
    overflow: 'hidden',
    elevation: 3,
  },
  horizontalImage: {
    width: '100%',
    height: 150,
  },
  horizontalTitle: {
    padding: 12,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
});

export default HorizontalScroll;