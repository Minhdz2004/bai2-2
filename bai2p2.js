import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const notifications = [
  {
    id: '1',
    icon: 'check-circle',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    time: '20/08/2020, 06:00',
  },
  {
    id: '2',
    icon: 'group',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2020, 06:00',
  },
  {
    id: '3',
    icon: 'error',
    title: 'Khách hàng được chia sẻ bị trùng',
    description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    time: '20/08/2020, 06:00',
  },
  {
    id: '4',
    icon: 'error',
    title: 'Khách hàng được thêm bị trùng',
    description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
    time: '20/08/2020, 06:00',
  },
  {
    id: '5',
    icon: 'check-circle',
    title: 'Công việc sắp đến hạn trong hôm nay',
    description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    time: '20/08/2020, 06:00',
  },
  {
    id: '6',
    icon: 'warning',
    title: 'Công việc đã quá hạn',
    description: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    time: '20/08/2020, 06:00',
  },
  {
    id: '7',
    icon: 'check-circle',
    title: 'Bước 2 Tư vấn giải pháp',
    description: 'Bạn cần hoàn thành tư vấn cho khách hàng.',
    time: '20/08/2020, 06:30',
  },
];

const NotificationItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Icon name={item.icon} size={24} color="#007AFF" style={styles.icon} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  </View>
);

const NotificationList = () => {
  return (
    <View style={styles.container}>
      {/* Tiêu đề thông báo */}
      <Text style={styles.header}>{('\n')}{('\n')}
        Thông báo</Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
        contentContainerStyle={styles.listContainer} // Hỗ trợ cuộn tốt hơn
        showsVerticalScrollIndicator={false} // Ẩn thanh cuộn
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Đảm bảo màn hình có thể cuộn
    backgroundColor: '#F9F9F9',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  listContainer: {
    paddingBottom: 20, // Tạo khoảng trống khi cuộn hết danh sách
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});

export default NotificationList;
