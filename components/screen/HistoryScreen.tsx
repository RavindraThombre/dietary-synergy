import { Ionicons } from "@expo/vector-icons";
import { useCallback, useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

import type { AppTheme } from "../../constants/theme";

import {
  clearHistory,
  deleteHistoryItem,
  getHistory,
  type FoodHistoryItem,
} from "../../service/historyService";

import { styles } from "../../styles/HistoryScreen.styles";

type Props = {
  theme: AppTheme;
  onBack: () => void;
};

export default function HistoryScreen({ theme, onBack }: Props) {
  const [history, setHistory] = useState<FoodHistoryItem[]>([]);

  const loadHistory = useCallback(async () => {
    const items = await getHistory();
    setHistory(items);
  }, []);

  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  const handleDelete = (id: string) => {
    Alert.alert(
      "Delete history",
      "Remove this combination from your history?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            await deleteHistoryItem(id);
            await loadHistory();
          },
        },
      ],
    );
  };

  const handleClearHistory = () => {
    if (history.length === 0) {
      return;
    }

    Alert.alert("Clear history", "Remove all recently checked combinations?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Clear All",
        style: "destructive",
        onPress: async () => {
          await clearHistory();
          setHistory([]);
        },
      },
    ]);
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();

    const difference = now.getTime() - date.getTime();

    const minutes = Math.floor(difference / (1000 * 60));

    if (minutes < 1) {
      return "Just now";
    }

    if (minutes < 60) {
      return `${minutes} min ago`;
    }

    const hours = Math.floor(minutes / 60);

    if (hours < 24) {
      return `${hours} hr ago`;
    }

    const days = Math.floor(hours / 24);

    if (days < 7) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    }

    return date.toLocaleDateString();
  };

  const isCompatible = (item: FoodHistoryItem) => {
    const value = item.result?.["Compatible/incompatible"] ?? "";

    return value.trim().toLowerCase().startsWith("compatible");
  };

  const renderItem = ({ item }: { item: FoodHistoryItem }) => {
    const compatible = isCompatible(item);
    const notFound = !item.result;

    const statusColor = notFound
      ? theme.textSecondary
      : compatible
        ? "#16A34A"
        : "#DC2626";

    const statusBackground = notFound
      ? theme.surfaceSecondary
      : compatible
        ? "rgba(22, 163, 74, 0.12)"
        : "rgba(220, 38, 38, 0.12)";

    const statusIcon: React.ComponentProps<typeof Ionicons>["name"] = notFound
      ? "help-circle-outline"
      : compatible
        ? "checkmark-circle"
        : "close-circle";

    const statusText = notFound
      ? "No result found"
      : compatible
        ? "Compatible"
        : "Incompatible";

    return (
      <Pressable
        onLongPress={() => handleDelete(item.id)}
        style={({ pressed }) => [
          styles.historyCard,
          {
            backgroundColor: theme.surface,
            borderColor: theme.border,
            opacity: pressed ? 0.8 : 1,
          },
        ]}
      >
        <View style={styles.historyTopRow}>
          <View
            style={[
              styles.foodIcon,
              {
                backgroundColor: theme.primaryLight,
              },
            ]}
          >
            <Ionicons
              name="nutrition-outline"
              size={21}
              color={theme.primary}
            />
          </View>

          <View style={styles.foodContent}>
            <Text
              numberOfLines={3}
              style={[styles.foodsText, { color: theme.text }]}
            >
              {item.foods.join(" + ")}
            </Text>

            <Text
              style={[
                styles.combinationText,
                {
                  color: theme.textSecondary,
                },
              ]}
            >
              {item.foodCount}-food combination
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={18}
            color={theme.textSecondary}
            style={styles.chevron}
          />
        </View>

        <View style={[styles.divider, { backgroundColor: theme.border }]} />

        <View style={styles.historyBottomRow}>
          <View style={styles.statusContainer}>
            <View
              style={[
                styles.statusIcon,
                {
                  backgroundColor: statusBackground,
                },
              ]}
            >
              <Ionicons name={statusIcon} size={16} color={statusColor} />
            </View>

            <Text style={[styles.statusText, { color: statusColor }]}>
              {statusText}
            </Text>
          </View>

          <Text style={[styles.timeText, { color: theme.textSecondary }]}>
            {formatTime(item.checkedAt)}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <StatusBar
        barStyle={theme.mode === "dark" ? "light-content" : "dark-content"}
        backgroundColor={theme.background}
      />

      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <Pressable
                  onPress={onBack}
                  accessibilityRole="button"
                  accessibilityLabel="Back to home"
                  style={[
                    styles.backButton,
                    {
                      backgroundColor: theme.surfaceSecondary,
                      borderColor: theme.border,
                    },
                  ]}
                >
                  <Ionicons name="arrow-back" size={19} color={theme.primary} />
                </Pressable>

                <View
                  style={[
                    styles.headerIcon,
                    {
                      backgroundColor: theme.primaryLight,
                    },
                  ]}
                >
                  <Ionicons
                    name="time-outline"
                    size={23}
                    color={theme.primary}
                  />
                </View>

                <View style={styles.titleContainer}>
                  <Text style={[styles.title, { color: theme.text }]}>
                    History
                  </Text>

                  <Text
                    style={[
                      styles.subtitle,
                      {
                        color: theme.textSecondary,
                      },
                    ]}
                  >
                    Recently checked combinations
                  </Text>
                </View>
              </View>

              {history.length > 0 && (
                <Pressable
                  onPress={handleClearHistory}
                  style={styles.clearButton}
                >
                  <Text
                    style={[styles.clearButtonText, { color: theme.primary }]}
                  >
                    Clear
                  </Text>
                </Pressable>
              )}
            </View>

            {history.length > 0 && (
              <View
                style={[
                  styles.summaryCard,
                  {
                    backgroundColor: theme.surface,
                    borderColor: theme.border,
                  },
                ]}
              >
                <View style={styles.summaryRow}>
                  <View
                    style={[
                      styles.summaryIcon,
                      {
                        backgroundColor: theme.primaryLight,
                      },
                    ]}
                  >
                    <Ionicons
                      name="layers-outline"
                      size={21}
                      color={theme.primary}
                    />
                  </View>

                  <View style={styles.summaryContent}>
                    <Text style={[styles.summaryTitle, { color: theme.text }]}>
                      {history.length} recent{" "}
                      {history.length === 1 ? "check" : "checks"}
                    </Text>

                    <Text
                      style={[
                        styles.summaryText,
                        {
                          color: theme.textSecondary,
                        },
                      ]}
                    >
                      Your latest food compatibility checks are saved here.
                    </Text>
                  </View>
                </View>
              </View>
            )}

            {history.length > 0 && (
              <View style={styles.sectionHeader}>
                <Text style={[styles.sectionTitle, { color: theme.text }]}>
                  Recently Checked
                </Text>

                <Text
                  style={[
                    styles.sectionCount,
                    {
                      color: theme.textSecondary,
                      backgroundColor: theme.surfaceSecondary,
                    },
                  ]}
                >
                  {history.length}
                </Text>
              </View>
            )}
          </>
        }
        ListEmptyComponent={
          <View
            style={[
              styles.emptyCard,
              {
                backgroundColor: theme.surface,
                borderColor: theme.border,
              },
            ]}
          >
            <View
              style={[
                styles.emptyIcon,
                {
                  backgroundColor: theme.primaryLight,
                },
              ]}
            >
              <Ionicons name="time-outline" size={31} color={theme.primary} />
            </View>

            <Text style={[styles.emptyTitle, { color: theme.text }]}>
              No history yet
            </Text>

            <Text
              style={[
                styles.emptyText,
                {
                  color: theme.textSecondary,
                },
              ]}
            >
              Your recently checked food combinations will appear here after you
              check them.
            </Text>
          </View>
        }
        ListFooterComponent={
          history.length > 0 ? (
            <Text
              style={[
                styles.footer,
                {
                  color: theme.textSecondary,
                },
              ]}
            >
              Dietary Synergy · History
            </Text>
          ) : null
        }
      />
    </SafeAreaView>
  );
}
